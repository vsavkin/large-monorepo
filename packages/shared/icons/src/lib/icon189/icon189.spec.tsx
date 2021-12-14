import { render } from '@testing-library/react';

import Icon189 from './icon189';

describe('Icon189', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon189 />);
    expect(baseElement).toBeTruthy();
  });
});
