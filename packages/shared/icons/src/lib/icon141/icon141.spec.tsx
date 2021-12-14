import { render } from '@testing-library/react';

import Icon141 from './icon141';

describe('Icon141', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon141 />);
    expect(baseElement).toBeTruthy();
  });
});
