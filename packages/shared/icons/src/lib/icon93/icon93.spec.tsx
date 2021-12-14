import { render } from '@testing-library/react';

import Icon93 from './icon93';

describe('Icon93', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon93 />);
    expect(baseElement).toBeTruthy();
  });
});
