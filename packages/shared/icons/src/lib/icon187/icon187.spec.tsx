import { render } from '@testing-library/react';

import Icon187 from './icon187';

describe('Icon187', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon187 />);
    expect(baseElement).toBeTruthy();
  });
});
