import { render } from '@testing-library/react';

import ImportantComponent31 from './important-component-31';

describe('ImportantComponent31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent31 />);
    expect(baseElement).toBeTruthy();
  });
});
