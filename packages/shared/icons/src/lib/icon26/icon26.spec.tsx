import { render } from '@testing-library/react';

import Icon26 from './icon26';

describe('Icon26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon26 />);
    expect(baseElement).toBeTruthy();
  });
});
