import { render } from '@testing-library/react';

import Icon56 from './icon56';

describe('Icon56', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon56 />);
    expect(baseElement).toBeTruthy();
  });
});
