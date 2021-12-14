import { render } from '@testing-library/react';

import Icon117 from './icon117';

describe('Icon117', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon117 />);
    expect(baseElement).toBeTruthy();
  });
});
