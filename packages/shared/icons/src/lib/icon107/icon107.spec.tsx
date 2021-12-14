import { render } from '@testing-library/react';

import Icon107 from './icon107';

describe('Icon107', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon107 />);
    expect(baseElement).toBeTruthy();
  });
});
