import { render } from '@testing-library/react';

import ImportantComponent73 from './important-component-73';

describe('ImportantComponent73', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent73 />);
    expect(baseElement).toBeTruthy();
  });
});
