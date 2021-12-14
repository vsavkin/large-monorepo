import { render } from '@testing-library/react';

import Icon21 from './icon21';

describe('Icon21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon21 />);
    expect(baseElement).toBeTruthy();
  });
});
