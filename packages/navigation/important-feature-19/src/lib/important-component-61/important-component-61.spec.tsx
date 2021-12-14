import { render } from '@testing-library/react';

import ImportantComponent61 from './important-component-61';

describe('ImportantComponent61', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent61 />);
    expect(baseElement).toBeTruthy();
  });
});
