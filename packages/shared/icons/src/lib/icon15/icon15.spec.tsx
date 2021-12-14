import { render } from '@testing-library/react';

import Icon15 from './icon15';

describe('Icon15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon15 />);
    expect(baseElement).toBeTruthy();
  });
});
