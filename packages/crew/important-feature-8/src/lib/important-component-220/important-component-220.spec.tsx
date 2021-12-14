import { render } from '@testing-library/react';

import ImportantComponent220 from './important-component-220';

describe('ImportantComponent220', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent220 />);
    expect(baseElement).toBeTruthy();
  });
});
