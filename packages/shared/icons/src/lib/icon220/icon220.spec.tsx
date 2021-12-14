import { render } from '@testing-library/react';

import Icon220 from './icon220';

describe('Icon220', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon220 />);
    expect(baseElement).toBeTruthy();
  });
});
