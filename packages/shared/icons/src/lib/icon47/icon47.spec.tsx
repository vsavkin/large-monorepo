import { render } from '@testing-library/react';

import Icon47 from './icon47';

describe('Icon47', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon47 />);
    expect(baseElement).toBeTruthy();
  });
});
