import { render } from '@testing-library/react';

import Icon48 from './icon48';

describe('Icon48', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon48 />);
    expect(baseElement).toBeTruthy();
  });
});
