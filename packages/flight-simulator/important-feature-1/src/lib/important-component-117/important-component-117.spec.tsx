import { render } from '@testing-library/react';

import ImportantComponent117 from './important-component-117';

describe('ImportantComponent117', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent117 />);
    expect(baseElement).toBeTruthy();
  });
});
